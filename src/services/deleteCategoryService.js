import Alert from "./AlertService";
import { deletePrivate } from "./apiServices";

/**
 * A confirm message is shown. If user hits confirm button, 
 *  it executes the delete request to the server.
 * 
 * If server does not respond with an deleted field, it indicates that it
 *  could't find the category, so, the error message is shown, otherwise,
 *  the category is successfully deleted and the success message is 
 *  shown instead
 * 
 * @Returns true if the category was deleted or false if it wasn't. This
 * to be used if a redux action needs to be dispatched after the execution
 * of this function
 */

export const deleCategoryById = async( id ) => {

  const resp = await Alert.confirm({
    title: 'Eliminar categoría',
    message: 'Está seguro de eliminar esta categoría'
  }, () => deletePrivate(`categories/${ id }`))

  if( !resp ) return false;

  const deletedRows = resp.data.deleted;

  if(!deletedRows ){
    Alert.error({
      title: 'Error',
      message: resp.data.message
    })
    return false;
  }else{
    Alert.success({
      title: 'Operación exitosa',
      message: resp.data.message 
    })
    return true;
  }

}



