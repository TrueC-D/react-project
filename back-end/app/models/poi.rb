class Poi < ApplicationRecord
  validates :name, :category, :votes, :location_id, :street, :city, :state, :zip, presence: true
  validates :name, uniqueness: true

  belongs_to :location
  has_many :hours, dependent: :destroy
end
