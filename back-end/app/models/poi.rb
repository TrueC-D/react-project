class Poi < ApplicationRecord
  validates :name, :location_id, :street, :city, :state, :country, :zip, presence: true
  validates :name, uniqueness: true

  belongs_to :location
  has_many :hours, dependent: :destroy
end
