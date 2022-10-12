class FavoritesController < ApplicationController
#@currnet_user.favs
  def create
    fav = Favorite.create!(fav_params)
    render json: fav, status: :ok
  end

  def show
    if current_user
      render json: current_user.Favorite.all
    debugger
    
  end

  def destroy
    fav = Favorite.find
  end

  private

  def fav_params
    params.permit(:trail_id, :user_id)
  end
end
