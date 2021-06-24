class HourSerializer
  include FastJsonapi::ObjectSerializer
  attributes :day, :open_time, :close_time
  belongs_to :poi
end

# attributes :name, :category, :votes
#   # , :location_id
#   has_many :hours
#   belongs_to :location
