class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :start_visit, :end_visit
  has_many :pois
end

# attributes :name, :category, :votes
#   # , :location_id
#   has_many :hours
#   belongs_to :location

