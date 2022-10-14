class User < ApplicationRecord
  has_secure_password
  validates :username, uniqueness: true, presence: true
  has_many :favorites
  has_many :trails, through: :favorites
end
