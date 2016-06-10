class Api::ConnectionsController < ApplicationController
  def index
    @connections = Connection.all
  end

  def show
    @connection = Connection.find(params[:id])
  end

  def create
    @connection = Connection.new(connection_params)
    if @connection.save
      render "api/connections/show"
    else
      render json: @connection.errors, status: 422
    end
  end

  def update
    @connection = Connection.find(params[:id])
    if @connection.update(connection_params)
      render :show
    else
      render json: @connection.errors.full_messages, status: 422
    end
  end

  def destroy
    @connection = Connection.find(params[:id])

    if @connection.destroy
      render :show
    else
      render json: @connection.errors.full_messages, status: 422
    end
  end

  private
  def connection_params
    params.require(:connection).permit(:connector_id, :connectee_id, :status)
  end

end
