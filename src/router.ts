import { Router } from "express";
import * as update from "./handlers/update";
import * as product from "./handlers/product";


const router = Router();
/**
 * Product
 */
router.get("/product", product.getProducts);

router.get("/product/:id", product.getOneProduct);

router.post("/product", product.createProduct);

router.put("/product/:id", product.updateProduct);

router.delete("/product/:id", product.deleteProduct);

/**
 * Update 
 */
router.get("/update", update.getUpdates);

router.get("/update/:id", update.getOneUpdate);

router.post("/update", update.createUpdate);

router.put("/update/:id", update.updateUpdate);

router.delete("/update/:id", update.deleteUpdate);

/**
 * UpdatePoint 
 */
// TODO: updatepoint handlers
router.get("/updatepoint", (req, res) => {});

router.get("/updatepoint/:id", (req, res) => {});

router.post("/updatepoint", (req, res) => {});

router.put("/updatepoint/:id", (req, res) => {});

router.delete("/updatepoint/:id", (req, res) => {});

export default router;