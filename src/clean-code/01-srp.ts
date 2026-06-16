(() => {

    interface Product {
        id: number;
        name: string;
    }

    class ProductService {

        getProduct(id: number) {
            console.log('Producto:', { id, name: 'OLED TV' });
        }

        saveProduct(product: Product) {
            console.log('Guardando en base de datos', product);
        }

    }

    class ProductNotifier {

        notifyClients() {
            console.log('Enviando correo a los clientes');
        }

    }

    class CartBloc {

        addToCart(productId: number) {
            console.log('Agregando al carrito', productId);
        }

    }

    const productService = new ProductService();
    const productNotifier = new ProductNotifier();
    const cartBloc = new CartBloc();

    productService.getProduct(10);
    productService.saveProduct({ id: 10, name: 'OLED TV' });

    productNotifier.notifyClients();

    cartBloc.addToCart(10);

})();