class User < ApplicationRecord

    has_many :favorites
    validates_presence_of :first_name, message: "Please enter your first name."
    validates_presence_of :last_name, message: "Please enter your last name."
    validates_presence_of :email, message: "Please enter your email."
    validates :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 10, 
    message: "Your password must be at least 10 characters." 
    }, allow_nil: true
    
    after_initialize :ensure_session_token
    
    attr_reader :password

    def self.find_by_credentials(email, password)
        @user = User.find_by(email: email)
        return nil unless @user && @user.is_password?(password)
        return @user
    end

    def password= (password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64(16)
        self.save
        self.session_token
    end

end
