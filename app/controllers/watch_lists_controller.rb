class WatchListsController < ApplicationController
    def show
        current_watch_list = User.find(session[:current_user])
        render json: current_user
    end

    def add_to_watch_list
        if WatchList.exists?(user_id: params[:userId])
            userWatchList = WatchList.find_by(user_id: params[:userId])
            userWatchList.stocks << params[:tickerName]
        else
            watch_list = WatchList.create!(user_id: params[:userId])
            watch_list.stocks << params[:tickerName]
        end
    end
end
