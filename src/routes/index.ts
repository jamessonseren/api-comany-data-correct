import { Router } from "express";
import { companyDataRouter } from "./CompanyData/company-data.routes";
import { companyAddressRouter } from "./CompanyAddress/company-address.routes";

const router = Router()

router.use(companyDataRouter)
router.use(companyAddressRouter)

export { router }