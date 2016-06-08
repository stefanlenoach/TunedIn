class Api::SessionsController < ApplicationController

  def omni_create
    @user = User.find_or_create_by_auth_hash(auth_hash)
    login(@user)
    redirect_to '/'
  end

	def create
		@user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password],
    )

    if @user
			login(@user)
			render "api/users/show"
		else
			render(
        json: {
          base: ["Invalid email/password combination"]
        },
        status: 401
      )
		end
	end

	def destroy
		@user = current_user
		if @user
			logout
			render "api/users/show"
		else
			render(
        json: {
          base: ["Nobody signed in"]
        },
        status: 404
      )
		end
	end

	def show
		if current_user
			@user = current_user
			render "api/users/show"
		else
			render json: {}
		end
	end

  protected

  def auth_hash
    request.env['omniauth.auth']
  end

end
