class Api::ExperiencesController < ApplicationController

  def index
    @exps = Experience.all
  end

  def show
  end

  def create
    @exp = Experience.new(exp_params)
    @exp.user_id = current_user.id;
    if @exp.save
      render "api/experiences/show"
    else
      render json: @exp.errors, status: 422
    end
  end

  def update
  end

  def edit
  end

  def destroy
  end

  private
  def exp_params
    params.require(:experience).permit(:user_id, :company_name, :title, :location, :description)
  end

end
