using { sap.export as my } from '../db/schema';

@path: 'api'
service ExportService {
  entity exports as projection on my.export;
}
