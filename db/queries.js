exports.quriesList ={
    GET_STORE_LIST_QUERY : 'SELECT store_id, store_name, store_code, store_address, created_on, created_by FROM bms.store',
    CREATE_STORE_QUERY : "INSERT INTO bms.store (store_name, store_code, store_address, created_on, created_by) VALUES('$1', '$2', '$3', '$4', '$5') ",
}