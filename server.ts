import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API Routes
  app.get("/api/images", (req, res) => {
    // This simulates getting images from a database or storage
    const images = [
      {
        id: '1',
        url: 'https://picsum.photos/seed/spice1/800/600',
        title: 'Premium Cinnamon',
        description: 'Hand-picked Ceylon cinnamon sticks from our finest plantations.',
        category: 'Spices'
      },
      {
        id: '2',
        url: 'https://picsum.photos/seed/spice2/800/600',
        title: 'Organic Black Pepper',
        description: 'Sun-dried organic black pepper with intense aroma.',
        category: 'Spices'
      },
      {
        id: '3',
        url: 'https://picsum.photos/seed/spice3/800/600',
        title: 'Pure Turmeric Powder',
        description: 'High-curcumin turmeric powder processed naturally.',
        category: 'Powders'
      },
      {
        id: '4',
        url: 'https://picsum.photos/seed/spice4/800/600',
        title: 'Green Cardamom',
        description: 'Aromatic green cardamom pods harvested at peak maturity.',
        category: 'Spices'
      },
      {
        id: '5',
        url: 'https://picsum.photos/seed/spice5/800/600',
        title: 'Cloves',
        description: 'Premium quality whole cloves with rich essential oils.',
        category: 'Spices'
      },
      {
        id: '6',
        url: 'https://picsum.photos/seed/spice6/800/600',
        title: 'Nutmeg',
        description: 'Whole nutmeg seeds with distinctive warm flavor.',
        category: 'Spices'
      }
    ];
    res.json(images);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // Serve static files in production
    app.use(express.static(path.join(__dirname, "dist")));
    app.get("*all", (req, res) => {
      res.sendFile(path.join(__dirname, "dist", "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
