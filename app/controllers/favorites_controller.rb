class FavoritesController < ApplicationController

  def create
    fav = Favorite.create!(fav_params)
    render json: fav, status: :ok
  end

  def show
  end

  def destroy
    fav = Favorite.find
  end

  private

  def fav_params
    params.permit(:trail_id, :user_id)
  end
end
