class TrailsController < ApplicationController

  def get_trails
      trails = Trail.find_by(state: params[:state], city: params[:city])
      if trails
          render json: trails, status: :ok
      else
          render json: { error: "Nothing found" }, status: :not_found
      end
  end
  
  private

  def trail_params
      params.permit(:city, :state)
  end

end
