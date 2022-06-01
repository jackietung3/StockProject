class UsersController < ApplicationController
    wrap_parameters format: []

    def index
        render json: User.all
    end

    def show
        current_user = User.find(session[:current_user])
        render json: current_user
    end

    def create
        if User.exists?(username: params[:username])
            render json: {error: 'Username not available. Try a different username.'}, status: :not_acceptable 
        else
            user = User.create!(user_params)
            render json: user, status: :created
        end
    end

    def update
        user = User.find(params[:id])
        if user.username == params[:username]
            user.update!(user_params)
            render json: user, status: :created
        elsif User.exists?(username: params[:username])
            render json: {error: 'Username not available. Try a different username.'}, status: :not_acceptable 
        else
            user.update!(user_params)
            render json: user, status: :created
        end
    end

    def destroy
        user = User.find(params[:id])
        user.destroy
    end

    private

    def user_params
        params.permit(:first_name, :last_name, :username, :password)
    end
end
