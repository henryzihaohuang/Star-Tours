class UsersController < ApplicationController

    before_action :require_logged_in, only: [:show]

    def create
        @user = User.new(user_params)
        # debugger
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


    def update
        debugger
        @user = current_user

        new_balance = current_user.balance + params[:amount].to_f

        current_user.update(balance: new_balance)

        render :show
    end
    

    private 
    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :balance)
    end

end
