class Api::ExperiencesController < ApplicationController

  def index
    @exps = Experience.all
  end

  def show
    @exp = Experience.find(params[:id])
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
    @exp = Experience.find(params[:id])

    if @exp.update(exp_params)
      render :show
    else
      render json: @exp.errors.full_messages, status: 422
    end
  end

  def destroy
    @exp = Experience.find(params[:id])

    if @exp.destroy
      render :show
    else
      render json: @exp.errors.full_messages, status: 422
    end
  end

  private
  def exp_params
    params.require(:experience).permit(:user_id, :company_name, :title, :location, :description)
  end

end
