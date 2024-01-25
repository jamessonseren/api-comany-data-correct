import { Router } from "express";
import { createCompanyAddressController } from "../../modules/Company/CompanyAddress/usecases/create-company-address";
import { getCompanyAddressController } from "../../modules/Company/CompanyAddress/usecases/get-company-address";

export const companyAddressRouter = Router()

//register company address
companyAddressRouter.post("/company-address", async (request, response) => {
    await createCompanyAddressController.handle(request, response)
})

//get by company data id
companyAddressRouter.get("/company-address", async (request, response) => {
    await getCompanyAddressController.handle(request, response)
})