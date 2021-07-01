class LocationSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name, :start_visit, :end_visit
  # has_many :pois
end

