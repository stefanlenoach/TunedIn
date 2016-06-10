class Api::EducationsController < ApplicationController
  def index
    @edus = Education.all
  end

  def show
    @edu = Education.find(params[:id])
  end

  def create
    @edu = Education.new(edu_params)
    @edu.user_id = current_user.id;
    if @edu.save
      render "api/educations/show"
    else
      render json: @edu.errors, status: 422
    end
  end

  def update
    @edu = Education.find(params[:id])

    if @edu.update(edu_params)
      render :show
    else
      render json: @edu.errors.full_messages, status: 422
    end
  end

  def destroy
    @edu = Education.find(params[:id])

    if @edu.destroy
      render :show
    else
      render json: @edu.errors.full_messages, status: 422
    end
  end

  private
  def edu_params
    params.require(:education).permit(:user_id, :school,
                       :degree, :field_of_study, :dates_attended,
                       :grade, :activities, :description)
  end
end
