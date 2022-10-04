class UsersController < ApplicationController

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :ok
    end

    def show
        user = User.find_by(id: session[:user_id])
        render json: user, status: :ok
    end

    def update
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
        session.delete :user_id
        head :no_content
    end

    private

    def user_params
        params.permit(:username, :password)
    end
end
