class PoiSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :category, :icon_url, :votes, :notes, :street, :city, :state, :country, :zip, :location_id
  # has_many :hours
  # belongs_to :location
end
