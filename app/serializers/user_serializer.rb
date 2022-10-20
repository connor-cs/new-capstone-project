class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :favorite_trails
  has_many :favorites
  # has_many :trails, through: :favorites

  def favorite_trails
    self.object.trails
  end
end
