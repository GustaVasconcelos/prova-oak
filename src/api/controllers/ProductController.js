class ProductController {
    constructor(productService) {
        this.productService = productService;
    }

    create = async (req, res) => {
        try {
            const productDetails = req.body;
            const product = await this.productService.create(productDetails);
            console.log(product);
            res.status(201).json({ message: 'Produto cadastrado'});
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    };

    getAll = async (req, res) => {
        try {
            const products = await this.productService.getAll();

            res.status(200).json(products);
        } catch (error) {
            res.status(500).json({ error: 'Erro interno do servidor' });
        }
    };

    getById = async (req, res) => {
        try {
            const productId = req.params.id;

            const product = await this.productService.getById(productId);

            if (!product) {
                return res.status(404).json({ message: 'Produto não encontrado' });
            }

            res.status(200).json(product);
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    };

    update = async (req, res) => {
        try {
            const productId = req.params.id;
            const productDetails = req.body;

            const updatedProduct = await this.productService.update(productId, productDetails);

            res.status(200).json({ message: 'Produto editado'});
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    };

    delete = async (req, res) => {
        try {
            const productId = req.params.id;

            await this.productService.delete(productId);

            res.status(200).json({ message: 'Produto deletado'});
        } catch (error) {
            if (error instanceof Error) {
                res.status(400).json({ error: error.message });
            } else {
                res.status(500).json({ error: 'Erro interno do servidor' });
            }
        }
    };
}

export default ProductController;