class Hour < ApplicationRecord
  validates :day, :open_time, :close_time, :poi_id, presence: true
  # validates :day, uniqueness: true
  # want day to be unique if it belongs to same poi
  belongs_to :poi
end
