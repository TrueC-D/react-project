class HoursController < ApplicationController
    def create
        poi
        if poi
            hour = Hour.new(hour_params)
            if hour.valid?
                hour.save
                render json: HourSerializer.new(hour)
            end
        end
    end

    def update
        find_hour
        poi
        if poi
            hour.assign_attributes(hour_params)
            if hour.valid?
                hour.save
                render json: HourSerializer.new(hour)
            end
        end
    end

    def destroy
        render json: find_hour.destroy
    end

    private
    
    def poi
        poi = Poi.find(id: params[:poi_id])
    end

    def find_hour
        hour = Hour.find(params[:id])
    end

    def hour_params
        params.require(:hour).permit(:day, :open_time, :close_time)
    end
end


