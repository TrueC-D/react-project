class PoisController < ApplicationController
    # Poi is points of interest

    def index
        pois = Poi.all
        render json: PoiSerializer.new(pois)
    end

    def show
        # options = {include: [:hours]}
        # render json: PoiSerializer.new(find_poi, options)
        render json: PoiSerializer.new(find_poi)
    end

    def create
        if location
            poi = Poi.new(poi_params)
            if poi.valid?
                poi.save
                render json: PoiSerializer.new(poi)
            end
        end
    end

    def update
        poi = find_poi
        if location
            poi.assign_attributes(poi_params)
            if poi.valid?
                poi.save
                render json: PoiSerializer.new(poi)
            end
        end
    end

    def destroy
        render json: find_poi.destroy
    end

    private 
    
    def location
        location = Location.find(params[:location_id])
    end

    def find_poi
        poi = Poi.find(params[:id])
    end

    def poi_params
        params.require(:poi).permit(:name, :category, :icon_url, :votes, :notes, :street, :city, :state, :country, :zip, :location_id)
    end

    # update multiple models from controller?
    # https://stackoverflow.com/questions/37799085/how-to-update-multiple-models-in-single-action-rails-4

    def hour_params
        params.require(:hour).permit(:day, :open_time, :close_time)
    end
end
