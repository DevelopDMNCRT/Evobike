const { Pool } = require('pg');
const pool = new Pool({
  connectionString: 'postgresql://neondb_owner:npg_HxDNE2Th5rus@ep-shy-sky-aq84793a-pooler.c-8.us-east-1.aws.neon.tech/neondb?sslmode=require',
});

async function clear() {
  try {
    await pool.query('DELETE FROM clientes_evobike');
    console.log('Tabla clientes_evobike limpiada con éxito.');
  } catch (err) {
    console.error('Error al limpiar tabla:', err.message);
  } finally {
    await pool.end();
  }
}

clear();
