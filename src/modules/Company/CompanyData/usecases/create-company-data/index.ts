import { CompanyDataPrismaRepository } from "../../repositories/implementations/prisma/company-data-prisma.repository";
import { CreateCompanyDataController } from "./create-company-data.controller";

const companyDataRepository = new CompanyDataPrismaRepository()

const companyDataController = new CreateCompanyDataController(
    companyDataRepository,
)

export { companyDataController }