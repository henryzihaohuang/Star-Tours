class Api::UsersController < ApplicationController
    before_action :require_logged_in, only: [:show]

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            
            render json: @user.errors.full_messages, status: 401
        end
    end

    def show
        @user = current_user
        render :show
    end

    private 
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :image_url, :auth0_user_id)
    end

end
