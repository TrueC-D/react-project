class LocationsController < ApplicationController
    def index
        locations = Location.all
        render json: LocationSerializer.new(locations)
    end

    def show
        render json: LocationSerializer.new(find_location)
    end

    def create
        location = Location.new(location_params)
        if location.valid?
            location.save
            render json: LocationSerializer.new(location)
        else 
            render json: {message: 'input not valid'}
        end
    end

    def update
        location
        if location
            location.assign_attributes(update_location_params)
            if location.valid?
                location.save
                render json: LocationSerializer.new(location)
            else 
                render json: {message: 'input not valid'}
            end
        else
            render json: {message: 'location not found'}
        end
    end

    def destroy
        render json: find_location.destroy
    end


    private

    def find_location
        location = Location.find(params[:id])
    end

    def update_location_params
        params.require(:location).permit(:start_visit, :end_visit)
    end

    def location_params
        params.require(:location).permit(:name, :start_visit, :end_visit)
    end
end

