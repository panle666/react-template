import { BaseApi } from "./base/BaseApi";
import { ILikeWare } from "./viewModel/ILikeWare";

export default class HomeApi extends BaseApi {
  static async GetData() {
    const uri = "/DataPlatform/GetIndexGuessLikeProducts";
    const result = await super.get<ILikeWare[]>(
      uri
    );
    debugger;
    return result;
  }
}
