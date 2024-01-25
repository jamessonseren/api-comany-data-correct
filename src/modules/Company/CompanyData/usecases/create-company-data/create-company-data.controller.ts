import { Request, Response } from "express";
import { ICompanyDataRepository } from "../../../CompanyData/repositories/company-data.repository";
import { CreateCompanyDataUsecase } from "./create-company-data.usecase";
import { CompanyDataRequest } from "../../companyDataDto/company-data.dto";


export class CreateCompanyDataController {
    constructor(
        private companyDataRepository: ICompanyDataRepository,
    ) {

    }
    async handle(req: Request, res: Response) {

        try {
            const data: CompanyDataRequest = req.body

            const companyDataUsecase = new CreateCompanyDataUsecase(
                this.companyDataRepository,
            )

            const companyData = await companyDataUsecase.execute(data)

            return res.json(companyData)

        } catch (err: any) {
            return res.status(err.statusCode).json({
                error: err.message
            })
        }
    }
}