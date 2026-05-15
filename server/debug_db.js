const { Pool } = require("pg");
const db = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_HxDNE2Th5rus@ep-shy-sky-aq84793a-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require',
  ssl: { rejectUnauthorized: false }
});

async function check() {
  const { rows } = await db.query("SELECT id, nombre, foto_principal, galeria FROM productos WHERE nombre ILIKE '%Golf%' LIMIT 5;");
  console.log(JSON.stringify(rows, null, 2));
  const { rows: colors } = await db.query("SELECT * FROM productos_colores WHERE producto_id IN (SELECT id FROM productos WHERE nombre ILIKE '%Golf%');");
  console.log("COLORS:", JSON.stringify(colors, null, 2));
  await db.end();
}
check();
