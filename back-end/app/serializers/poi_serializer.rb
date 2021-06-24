class PoiSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :category, :votes, :notes, :street, :city, :state, :zip
  # , :location_id
  has_many :hours
  belongs_to :location
end
