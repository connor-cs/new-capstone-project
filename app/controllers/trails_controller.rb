class TrailsController < ApplicationController

  def get_trails
      trails = Trail.where(state: params[:state], city: params[:city])
      pp trails
      if trails
          render json: trails, serializer: nil, status: :ok
      else
          render json: { error: "Nothing found" }, status: :not_found
      end
  end
  
  private

  def trail_params
      params.permit(:city, :state)
  end

end
