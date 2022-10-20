class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid,  with: :unprocessable

def unprocessable(entity)
  render json: {errors: entity.record.errors.full_messages }, status: 422
end

def current_user
  @current_user = User.find_by(id: session[:user_id])
end

end
