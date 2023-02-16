export interface UseCase<IReq, IRes> {
  execute(request?: IReq): Promise<IRes> | IRes;
}
