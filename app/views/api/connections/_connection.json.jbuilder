json.extract! connection, :id, :connector_id, :connectee_id, :status

json.connection_status connection.status_info(current_user.id)
