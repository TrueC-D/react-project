class Location < ApplicationRecord
    validates :name, :start_visit, :end_visit, presence: true
    has_many :pois, dependent: :destroy
end
