class WatchListsController < ApplicationController
    def show
        current_watch_list = WatchList.find_by(user_id: params[:userId])
        render json: current_watch_list
    end

    def add_to_watch_list
        if WatchList.exists?(user_id: params[:userId])
            userWatchList = WatchList.find_by(user_id: params[:userId])
            userWatchList.stocks << params[:tickerName]
            userWatchList.save!
            render json: userWatchList
        else
            watch_list = WatchList.create!(user_id: params[:userId])
            watch_list.stocks << params[:tickerName]
            watch_list.save!
            render json: watch_list
        end
    end

    def destroy
        watch_list = WatchList.find_by(user_id: params[:userId])
        watch_list.stocks.delete(params[:tickerName].upcase)
        watch_list.stocks.reject! {|ele| ele.nil?}
        watch_list.save!
        render json: watch_list
    end

end
