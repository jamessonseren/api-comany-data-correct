import { randomUUID } from 'crypto'
import { CustomError } from '../../../../errors/custom.error';
import { BusinessTypeOptions } from '@prisma/client';

type CompanyDataProps = {
    address_uuid: string | null
    contract_info_uuid: string | null
    business_category_id: string
    fantasy_name: string
    corporate_reason: string | null
    document: string
    classification: string
    colaborators_number: number
    block_list: string[]
    status: boolean
    phone_1: string
    phone_2: string | null
    business_type: BusinessTypeOptions
    email: string
}

export class CompanyDataEntity {

    uuid: string;
    address_uuid: string | null
    contract_info_uuid: string | null
    business_category_id: string
    fantasy_name: string
    corporate_reason: string | null
    document: string
    classification: string
    colaborators_number: number
    block_list: string[]
    status: boolean
    phone_1: string
    phone_2: string | null
    business_type: BusinessTypeOptions
    email: string

    private constructor(props: CompanyDataProps) {

        if (!props.fantasy_name) throw new CustomError("Fantasy name is required", 400)
        if (!props.classification) throw new CustomError("Company classification is required", 400)
        if (!props.colaborators_number) throw new CustomError("Total employees is required", 400)
        if(props.email) throw new CustomError("Email is required", 400)
        if (!props.phone_1) throw new CustomError("Telephone 1 is required", 400)

        this.uuid = randomUUID()
        this.address_uuid = props.address_uuid
        this.contract_info_uuid = props.contract_info_uuid
        this.business_category_id = props.business_category_id
        this.fantasy_name = props.fantasy_name
        this.corporate_reason = props.corporate_reason
        this.document = props.document
        this.classification = props.classification
        this.colaborators_number = props.colaborators_number
        this.block_list = props.block_list
        this.status = props.status
        this.phone_1 = props.phone_1
        this.phone_2 = props.phone_2
        this.business_type = props.business_type
        this.email = props.email

    }

    static async create(data: CompanyDataProps) {
        const companyData = new CompanyDataEntity(data)
        return companyData
    }
}