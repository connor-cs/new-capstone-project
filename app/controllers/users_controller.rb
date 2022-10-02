class UsersController < ApplicationController

  def create
      user = User.create!(user_params)
  
      session[:user_id] = user.id
      render json: user, status: :ok
  end

  def show
      user = User.find(params[:id])
      render json: user, status: :ok
  end
  
  private
  
  def user_params
      params.permit(:username, :password)
  end
end
