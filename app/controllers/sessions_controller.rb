class SessionsController <ApplicationController

	def new
		if session[:user_id]
			redirect_to sounds_path
		end
	end

	#/
	def create
		user = User.find_by({email: params[:email]})
		if user && user.authenticate(params[:password])
			session[:user_id] = user.id
			flash[:notice] ="That's the right on, Man."
			redirect_to sounds_path(@sounds)
		else
			flash[:notice]="Either your e-mail or password didn't work. Please try again."
			render :new
		end
	end

	#/logout
	def destroy
		session[:user_id] = nil
		flash[:notice] = "Logged Out Nowabouts."
		redirect_to "/"
	end

end
