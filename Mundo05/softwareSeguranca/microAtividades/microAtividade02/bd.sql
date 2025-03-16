MIN_PASSWORD_LENGTH = 8
MAX_LOGIN_ATTEMPTS = 5

password = new_password
username = new_username

IF USER_EXISTS(username) THEN
    RETURN Error("Já existe usuário com esse nome.")
ENDIF

IF LENGTH(password) < MIN_PASSWORD_LENGTH THEN
    RETURN Error("Senha deve ter pelo menos " + MIN_PASSWORD_LENGTH + " caracteres.")
ENDIF

IF GET_LOGIN_ATTEMPTS(username) >= MAX_LOGIN_ATTEMPTS THEN
    RETURN Error("Muitas tentativas inválidas. Tente novamente mais tarde.")
ENDIF

IF NOT LOOKUP_CREDENTIALS_IN_DATABASE(username, password) THEN
    INCREMENT_LOGIN_ATTEMPTS(username)
    RETURN Error("Usuário ou senha incorretos")
ENDIF

RESET_LOGIN_ATTEMPTS(username)

RETURN Success("Login realizado com sucesso")




