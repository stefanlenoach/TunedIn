
class User < ActiveRecord::Base

  attr_reader :password

  validates :email, :password_digest, :session_token, :first_name, :last_name, presence: true

  validates :email, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: :true
  validate :has_password_digest_or_titter_uid

  has_attached_file :image, default_url: "default_user.png"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/

  after_initialize :ensure_session_token
  before_validation :ensure_session_token_uniqueness

  has_many(
    :experiences,
    class_name: "Experience",
    primary_key: :id,
    foreign_key: :user_id
  )

  has_many(
    :educations,
    class_name: "Education",
    primary_key: :id,
    foreign_key: :user_id
  )

  has_many(
    :requested_connections,
    class_name: "Connection",
    primary_key: :id,
    foreign_key: :connector_id
  )

  has_many(
    :received_connections,
    class_name: "Connection",
    primary_key: :id,
    foreign_key: :connectee_id
  )

  def has_password_digest_or_titter_uid
    if (!password_digest && !twitter_uid)
      console.log('password_digest/twitter_uid validation breached')
    end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def connected_with?(user)
    return nil if user.nil?

    user.received_connections.each do |connection|
      if self.requested_connections.include?(connection)
        return [connection.status, "received"]
      end
    end

    user.requested_connections.each do |connection|
      if self.received_connections.include?(connection)
        return [connection.status, "requested"]
      end
    end

    return "false"
  end

  def self.find_by_credentials (email, password)
    user = User.find_by(email: email)
    return nil unless user
    user.password_is?(password) ? user : nil
  end

  def password_is? (password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = new_session_token
    ensure_session_token_uniqueness
    self.save
    self.session_token
  end

  def self.find_or_create_by_auth_hash(auth_hash)
    user = User.find_by(twitter_uid: auth_hash[:uid])

    if user.nil?
      user = User.create!(
        twitter_uid: auth_hash[:uid],
        first_name: auth_hash[:info][:name],
        last_name: auth_hash[:info][:name],
        email: (auth_hash[:info][:name] + "@twitter.com"),
        password_digest: "kljabdfklvboasdflkjbadsglkjbadf"
      )
    end

    user
  end

  private

  def ensure_session_token
    self.session_token ||= new_session_token
  end

  def new_session_token
    SecureRandom.base64
  end

  def ensure_session_token_uniqueness
    while User.find_by(session_token: self.session_token)
      self.session_token = new_session_token
    end
  end

end
