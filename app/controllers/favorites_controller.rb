class FavoritesController < ApplicationController
#@currnet_user.favs
  def create
    fav = Favorite.create!(fav_params)
    user=User.find(fav_params["user_id"])
    render json: user.trails, status: :ok
  end

  def show
    render json: current_user.favorites, status: :ok
  end

  def destroy
    favs = current_user.favorites
    favs.clear
    head :no_content
  end

  private

  def fav_params
    params.permit(:trail_id, :user_id)
  end
end
