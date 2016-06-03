class Api::SessionsController < ApplicationController

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

  def update
    @user = User.find(params[:id])

    if @user.update(user_params)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private
  def user_params
    params.require(:user).permit(:location, :currentPosition)
  end

end
