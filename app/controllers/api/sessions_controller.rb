class Api::SessionsController < ApplicationController
    before_action :require_logged_in, only: [:destroy]

    def new_auth0_user
        return head :unauthorized if params[:auth0_client_id] != ENV['AUTH0_CLIENT_ID']

        user = User.where(auth0_user_id: nil, email: params[:email]).first

        return head :not_found if user.nil?

        user.update!(auth0_user_id: params[:auth0_user_id])

        head :ok
    end

    def create
        @user = User.find_by_credentials(
            params[:user][:email],
            params[:user][:password]
        )
        if @user
            login!(@user)
            render "/api/users/show"
        else
            render json: ["Unable to log in with provided credentials."],
            status: 401
        end
    end
    
    def destroy
        logout!
        render json: { message: 'Logout successful' }
    end
    
end
